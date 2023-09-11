import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "./Cards.css";
const Cards = (prop) => {
  return (
    <div className="card">
      <Card shadow="sm" padding="lg" margin="" radius="lg" withBorder>
        <Card.Section>
          <Image src={prop.image} height={275} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Third i v{prop.number}</Text>
          <Badge color="pink" variant="light">
            {prop.date}
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {prop.content}
        </Text>
        <a href="https://github.com/Sudharsan-coder/Third_i" target="_blank">
          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Open git hub
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default Cards;
