class JsonView {

    static renderJson(res,status = 200,data) {
        res.setHeader('Content-Type','application/json');
        res.status(status).json(data);
    }

    static renderError(res,status = 404 ,error) {
        res.setHeader('Content-Type','application/json')
        res.status(status).json(error);
    }
}

export default JsonView;