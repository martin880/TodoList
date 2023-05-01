import React, { useState } from "react";
import { Button, FormControl, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
	const toast = useToast();

	function handleSubmit(e) {
		e.preventDefault();
		if (!content) {
			toast({
				title: "Cannot add empty todo.",
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

		addTodo(todo);
		setContent("");
	}

	const [content, setContent] = useState("");

	return (
		<FormControl
			width={"100%"}
			maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
		>
			<form onSubmit={handleSubmit}>
				<HStack marginY={"8"}>
					<Input
						variant={"filled"}
						placeholder="Learning Chakra UI by Martin"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<Button colorScheme="facebook" px={"8"} type={"submit"}>
						Add Todo
					</Button>
				</HStack>
			</form>
		</FormControl>
	);
};

export default AddTodo;
