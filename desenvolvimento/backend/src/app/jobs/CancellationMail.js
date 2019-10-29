import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Mail from '../../lib/Mail';

class CancellationMail {

  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {

    const { appointment } = data;

    await Mail.sendMain({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "dd 'de' MMMM', às' H'h'",
          {
            locale: pt
          }),
      },
    });

  }

}

export default new CancellationMail();