import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

import Queue from '../models/Queue';

class CancellationMail {

  get key() {
    return 'CancellationMail';
  }

  async process(appointment) {

    try {

      await Mail.senddMain({
        to: `${appointment.provider.name} <${appointment.provider.email}>`,
        subject: 'Agendamento cancelado',
        template: 'cancellation',
        context: {
          provider: appointment.provider.name,
          user: appointment.user.name,
          date: format(appointment.date,
            "dd 'de' MMMM', às' H'h'",
            {
              locale: pt
            }),
        },
      });

    }
    catch (err) {

      console.log(err);

      /*await Queue.create({
        key: this.key,
        error: true,
        message: err,
        appointment_id: appointment.id,
      });*/

    }

  }

}

export default new CancellationMail();