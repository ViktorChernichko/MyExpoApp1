import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

function Title({ text, color }) {
  return (
    <Text style={{ color, fontSize: 28 }}>
      {text}
    </Text>
  );
}

function TaskList({ tasks }) {
  const [done, setDone] = useState([]);

  const toggleTask = (index) => {
    setDone((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <View>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleTask(index)}>
          <Text
            style={{
              fontSize: 18,
              textDecorationLine: done.includes(index)
                ? 'line-through'
                : 'none',
            }}
          >
            {task}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

function ThemeBox({ dark }) {
  return (
    <View
      style={{
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dark ? '#111' : '#fff',
      }}
    >
      <Text style={{ color: dark ? '#fff' : '#000' }}>
        Theme
      </Text>
    </View>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <View style={{ padding: 20, paddingTop: 40, gap: 20 }}>
      <Title color="green" text="Hello" />

      <TaskList tasks={['Task 1', 'Task 2', 'Task 3']} />

      <ThemeBox dark={dark} />

      <Pressable onPress={() => setDark(!dark)}>
        <Text style={{ fontSize: 18 }}>
          Toggle Theme
        </Text>
      </Pressable>
    </View>
  );
}