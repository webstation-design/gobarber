import Appointment from '../models/Appointment';
import File from '../models/File';
import Queue from '../models/Queue';
import User from '../models/User';

class QueueController {

  async index(req, res) {

    const queues = await Queue.findAll({
      where: { error: true },
      include: [
        {
          model: Appointment,
          as: 'appointment',
          attributes: ['id', 'date'],
          include: [
            {
              model: User,
              as: 'provider',
              attributes: ['id', 'name'],
              include: [
                {
                  model: File,
                  as: 'avatar',
                  attributes: ['id', 'path', 'url'],
                }
              ]
            }
          ],
        },
      ],
    });

    res.json(queues);

  }

  async store(req, res) {

  }

}

export default new QueueController();