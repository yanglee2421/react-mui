// MUI Imports
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Stack,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Grid,
  FormControlLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  RefreshOutlined,
  ClearAllOutlined,
  RemoveOutlined,
  InsertInvitationOutlined,
} from "@mui/icons-material";

// Form Imports
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components Imports
import { ItemText } from "@/components";
import { ItemSwitch } from "@/components/form";

// Query Imports
import {
  useQuery,
  keepPreviousData as keepPreviousQueryData,
  useQueryClient,
} from "@tanstack/react-query";

// Utils Imports
import { timeout } from "@/utils";

export function QueryBoard() {
  const defaultValues = {
    queryKey: 0,
    enabled: true,
    keepPreviousData: false,
    fetchError: false,
  };

  const formCtx = useForm({
    defaultValues,

    resolver: yupResolver(
      yup.object().shape({
        queryKey: yup.number().required(),
        enabled: yup.boolean().required(),
        keepPreviousData: yup.boolean().required(),
        fetchError: yup.boolean().required(),
      })
    ),
  });

  const [queryKey, enabled, keepPreviousData, fetchError] = useWatch({
    control: formCtx.control,
    name: ["queryKey", "enabled", "keepPreviousData", "fetchError"],
  });

  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["query", queryKey],
    async queryFn() {
      await timeout(1000 * 2);

      if (fetchError) {
        throw new Error("Query failed");
      }

      return {
        date: new Date().toLocaleString(),
      };
    },

    enabled,

    staleTime: 1000 * 60,

    retry: 1,
    retryDelay: 1000 * 1,

    refetchInterval: 1000 * 70,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,

    placeholderData: keepPreviousData ? keepPreviousQueryData : void 0,
  });

  const handleReset = () => {
    formCtx.reset();
  };

  return (
    <>
      <Stack spacing={6}>
        <Card>
          <CardHeader
            title="Query Board"
            subheader="tanstack query lab"
          ></CardHeader>
          <CardContent>
            <FormProvider {...formCtx}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <ItemText name="queryKey" label="Query Key"></ItemText>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<ItemSwitch name="enabled"></ItemSwitch>}
                    label="Enabled"
                    labelPlacement="start"
                  ></FormControlLabel>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<ItemSwitch name="keepPreviousData"></ItemSwitch>}
                    label="KeepPreviousData"
                    labelPlacement="start"
                  ></FormControlLabel>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<ItemSwitch name="fetchError"></ItemSwitch>}
                    label="fetchError"
                    labelPlacement="start"
                  ></FormControlLabel>
                </Grid>
              </Grid>
            </FormProvider>
          </CardContent>
          <CardActions>
            <Button
              onClick={handleReset}
              variant="outlined"
              color="secondary"
              startIcon={<RefreshOutlined></RefreshOutlined>}
            >
              reset
            </Button>
            <Button
              onClick={() => {
                queryClient.invalidateQueries({
                  queryKey: ["query"],
                });
              }}
              variant="outlined"
              startIcon={<InsertInvitationOutlined></InsertInvitationOutlined>}
            >
              invalidate
            </Button>
            <Button
              onClick={() => {
                queryClient.removeQueries({
                  queryKey: ["query"],
                });
              }}
              variant="outlined"
              startIcon={<RemoveOutlined></RemoveOutlined>}
            >
              remove
            </Button>
            <Button
              onClick={() => {
                queryClient.clear();
              }}
              variant="outlined"
              startIcon={<ClearAllOutlined></ClearAllOutlined>}
            >
              clear
            </Button>
          </CardActions>
        </Card>
        <Card>
          <CardHeader
            title="Query Return"
            subheader="There is query result"
            action={
              <LoadingButton
                onClick={() => {
                  query.refetch();
                }}
                loading={query.isRefetching}
              >
                refetch
              </LoadingButton>
            }
          ></CardHeader>
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>{query.status}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>{query.data?.date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Error</TableCell>
                    <TableCell>{query.error?.message}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Stack>
    </>
  );
}
