import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  function handelSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: "No Content added",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    setContent("");
    addTodo(todo);
    

  }

  return (
    <form onSubmit={handelSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add your todos!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
