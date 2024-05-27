import { Box, Container, Flex, VStack, Image, Text, IconButton } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="brand.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <IconButton aria-label="Home" icon={<FaHome />} variant="ghost" color="white" />
        <IconButton aria-label="Profile" icon={<FaUser />} variant="ghost" color="white" />
        <IconButton aria-label="Upload" icon={<FaUpload />} variant="ghost" color="white" />
      </Flex>
      <VStack spacing={4} mt={4}>
        {photos.map(photo => (
          <Box key={photo.id} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={photo.src} alt={photo.alt} />
            <Text p={2}>Description for {photo.alt}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;