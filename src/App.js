import { Heading, VStack, IconButton, useToast, useColorMode} from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();

  function deleteTodo(id) {
    const newTodos = todos.filter((todos) => {
      return todos.id !== id;
    });

    toast({
      title: "Your selected todo successfully deleted!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
    toast({
      title: `${todo.body}. Successfully Added!`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon/>}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
