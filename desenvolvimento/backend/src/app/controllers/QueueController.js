import Queue from '../models/Queue';

class QueueController {

  async index(req, res) {

    const queues = await Queue.findAll({
      where: { error: false },
      attributes: ['key']
    });

    queues.forEach(key => {

    });

    res.json(queues);

  }

  async store(req, res) {

  }

}

export default new QueueController();