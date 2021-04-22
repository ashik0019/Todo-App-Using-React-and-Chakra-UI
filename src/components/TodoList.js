import React from "react";
import {
  HStack,
  IconButton,
  VStack,
  Text,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({todos, deleteTodo}) {
 
    if(!todos.length){
        return (
            <Badge colorScheme="green" p='4' m='4' borderRadius='lg'>
                No Todos!
            </Badge>
        )
    }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      padding="4"
      borderRadius="lg"
      width="100%"
      maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
