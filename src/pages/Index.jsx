import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, useToast } from "@chakra-ui/react";

const Index = () => {
  const [inputWord, setInputWord] = useState("");
  const [resultWord, setResultWord] = useState("");
  const [isUserTurn, setIsUserTurn] = useState(true);
  const toast = useToast();

  // Example dictionary
  const dictionary = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yuzu", "zucchini"];

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  const generateRandomWord = () => {
    if (!inputWord) {
      toast({
        title: "Input is empty.",
        description: "Please enter a word to proceed.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (isUserTurn) {
      setResultWord((prev) => `${prev} ${inputWord}`);
    } else {
      const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
      setResultWord((prev) => `${prev} ${randomWord}`);
    }
    setIsUserTurn(!isUserTurn);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Word Appender</Text>
        <Input placeholder="Enter a word" value={inputWord} onChange={handleInputChange} />
        <Button colorScheme="blue" onClick={generateRandomWord} isDisabled={!isUserTurn}>
          {isUserTurn ? "Append Your Word" : "Waiting for Agent..."}
        </Button>
        {resultWord && <Text fontSize="xl">Result: {resultWord}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;
