const connection = require('../database/connection');

module.exports = {

    async index(request,response) {
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .off((page-1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ong.whatsapp', 'ong.city', 'ong.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request,response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization; // Cabeçalho da requisição

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,    
        })

        return response.json({id});
    },

    async delete(request,response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if( incident.ong_id !== ong_id) {
            return response.status(401).json({error: 'operação não permitida.'});
        }

        await connection('incidents').where('id', id).delete();

        // Resposta com sucesso, mas sem conteúdo
        return response.status(204).send();
    }
}