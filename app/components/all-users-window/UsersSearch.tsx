"use client";

import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function UsersSearch({ allUsers }: any) {
  return (
    <Autocomplete
      classNames={{
        base: "max-w-xs",
        listboxWrapper: "max-h-[320px]",
        selectorButton: "text-default-500",
      }}
      defaultItems={allUsers}
      inputProps={{
        classNames: {
          input: "ml-1",
          inputWrapper: "h-[48px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-medium",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "dark:data-[hover=true]:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[hover=true]:bg-default-200",
            "data-[selectable=true]:focus:bg-default-100",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      aria-label="Select an employee"
      placeholder="Enter employee name"
      popoverProps={{
        offset: 10,
        classNames: {
          base: "rounded-large",
          content: "p-1 border-small border-default-100 bg-background",
        },
      }}
      startContent={"*"}
      radius="full"
      variant="bordered"
    >
      {(item: any) => (
        <AutocompleteItem key={item.id} textValue={item.id}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Avatar
                alt={item.id}
                className="flex-shrink-0"
                size="sm"
                src={item.imageUrl}
              />
              <div className="flex flex-col">
                <span className="text-small">{item.createdAt}</span>
              </div>
            </div>
            <Button
              className="border-small mr-0.5 font-medium shadow-small"
              radius="full"
              size="sm"
              variant="bordered"
            >
              Add
            </Button>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
