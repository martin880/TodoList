import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from ".//components/Footer";
import { useEffect, useState } from "react";

function App() {
	const [todos, setTodos] = useState(
		() => JSON.parse(localStorage.getItem("todos")) || []
	);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function deleteTodo(id) {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(newTodos);
	}

	function addTodo(todo) {
		setTodos([...todos, todo]);
	}

	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<VStack p={4}>
			<IconButton
				icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
				isRound={"true"}
				size={"lg"}
				alignSelf={"flex-end"}
				onClick={toggleColorMode}
			></IconButton>
			<Heading
				mb={"8"}
				fontWeight={"extrabold"}
				size={"2xl"}
				bgGradient={"linear(to-l, blue.600, blue.300, purple.500)"}
				bgClip={"text"}
			>
				Todo Application
			</Heading>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />
			<Footer />
		</VStack>
	);
}

export default App;
