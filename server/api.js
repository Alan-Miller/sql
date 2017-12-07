module.exports = app => {
    app.get('/api/characters', (req, res) => {
        req.app.get('db').get_characters().then(chars => {
            res.status(200).send(chars);
        });
    });
    app.get('/api/characters/:story', (req, res) => {
        req.app.get('db').get_characters_by_story().then(chars => {
            res.status(200).send(chars);
        });
    });
    app.get('/api/leaders', (req, res) => {
        req.app.get('db').get_leaders().then(leaders => {
            res.status(200).send(leaders);
        });
    });
    app.get('/api/stories', (req, res) => {
        req.app.get('db').get_stories().then(stories => {
            res.status(200).send(stories);
        });
    });
}