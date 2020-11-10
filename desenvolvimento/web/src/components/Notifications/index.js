import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Scroll, Notification } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento.</p>
            <time>há dois dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
