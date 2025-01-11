import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Box as="main" py={8}>
      <Container maxW="2xl">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="2xl">
            Welcome to Claude Test Next
          </Heading>
          
          <Text fontSize="lg">
            This is a Next.js application created with TypeScript and Chakra UI.
          </Text>

          <Box bg="gray.50" p={6} borderRadius="lg" shadow="sm">
            <Heading as="h2" size="lg" mb={4}>
              Features
            </Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Next.js 14 with App Router
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                TypeScript Configuration
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                React 18
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Chakra UI Components
              </ListItem>
            </List>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}