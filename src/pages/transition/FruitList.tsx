import { DeleteOutlined } from "@mui/icons-material";
import {
  Paper,
  List,
  Button,
  ListItem,
  IconButton,
  Collapse,
} from "@mui/material";
import React from "react";
import { TransitionGroup } from "react-transition-group";

export function FruitList() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(() => {
    return FRUITS.slice();
  });

  return (
    <Paper sx={{ padding: 3 }}>
      <Button
        onClick={() => {
          const nextHiddenItem = FRUITS.find((i) => {
            return !fruitsInBasket.includes(i);
          });

          if (nextHiddenItem) {
            setFruitsInBasket((prev) => {
              return [nextHiddenItem, ...prev];
            });
          }
        }}
        variant="contained"
        disabled={fruitsInBasket.length >= FRUITS.length}
      >
        Add fruit to basket
      </Button>
      <List>
        <TransitionGroup>
          {fruitsInBasket.map((item) => {
            return (
              <Collapse key={item}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      onClick={() => {
                        setFruitsInBasket((prev) => {
                          return prev.filter((i) => {
                            return i !== item;
                          });
                        });
                      }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  }
                >
                  {item}
                </ListItem>
              </Collapse>
            );
          })}
        </TransitionGroup>
      </List>
    </Paper>
  );
}

const FRUITS = [
  "🍏 Apple",
  "🍌 Banana",
  "🍍 Pineapple",
  "🥥 Coconut",
  "🍉 Watermelon",
];
