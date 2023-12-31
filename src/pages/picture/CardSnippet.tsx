// MUI Imports
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import { CodeOutlined } from "@mui/icons-material";

// React Imports
import React from "react";

export function CardSnippet(props: CardSnippetProps) {
  // ** Props
  const { title, children, collapseContent, ...restProps } = props;

  const [collapsed, setCollapsed] = React.useState(true);

  const handleCollapseToggle = () => {
    setCollapsed((p) => !p);
  };

  return (
    <Card {...restProps}>
      <CardHeader
        title={title}
        action={
          <IconButton onClick={handleCollapseToggle}>
            <CodeOutlined></CodeOutlined>
          </IconButton>
        }
      ></CardHeader>
      <CardContent>{children}</CardContent>
      <Collapse in={collapsed}>
        <Divider sx={{ my: 0 }}></Divider>
        <CardContent>{collapseContent}</CardContent>
      </Collapse>
    </Card>
  );
}

export interface CardSnippetProps {
  title: React.ReactNode;
  children: React.ReactNode;
  collapseContent: React.ReactNode;
}
