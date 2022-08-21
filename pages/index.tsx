import { Heading, Stack, Text, Button } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Layout } from "../components/Layout";
import { ServicesOverview } from "../features/landing/components/ServicesOverview";

export default function HomePage() {
  return (
    <Layout>
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Bienvenue chez{" "}
        <Text as={"span"} color={"brand.700"}>
          POVOTECH
        </Text>
      </Heading>
      <Image alt="Image de décoration" src={"/undraw_programming_re_kg9v.svg"} height={400} width={500} />
      <ServicesOverview />
      <Stack spacing={6} direction={"row"}>
        <Link href={"/contact"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"brand.700"}
            _hover={{ bg: "brand.800" }}
          >
            Contactez-moi
          </Button>
        </Link>
        <Link href={"/tarifs"}>
          <Button rounded={"full"} px={6}>
            En savoir plus
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
}

const Illustration: FC<Omit<ImageProps, "src">> = (props) => (
  <Image alt="Cleaning PC" src="/Cleaning PC_Monochromatic.svg" {...props} />
);
