import React from 'react';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';

function TimerUI() {
  return (
    <Tabs color="teal" variant="outline" radius="md" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<IconPhoto />} >Gallery</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle />} >Messages</Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings />} >Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export default TimerUI;