const BasicModel = require('../models/BasicModel');

exports.postBasicModel = async (req, res, next) => {
    const basicmodel = new BasicModel(req.body);
    try {
        await basicmodel.save();
        res.json(basicmodel);
    } catch (error) {
        console.log(error);
        next();
    };
};

exports.getBasicModels = async (req, res, next) => {
    try {
        const basicmodel = await BasicModel.find({});
        res.json(basicmodel);
    } catch (error) {
        console.log(error);
        next();
    };
};

exports.getBasicModel = async (req, res, next) => {
    try {
        const basicmodel = await BasicModel.findById(req.params.id);
        res.json(basicmodel);
    } catch (error) {
        console.log(error);
        next();
    };
};

exports.putBasicModel = async (req, res, next) => {
    try {
        const basicmodel = await BasicModel.findOneAndUpdate({id: req.params.id}, req.body, {
            new: true
        });
        res.json(basicmodel);
    } catch (error) {
        console.log(error);
        next();
    };
};

exports.deleteBasicModel = async (req, res, next) => {
    try {
        await BasicModel.findOneAndDelete({id: req.params.id});
        res.json({
            mensaje: 'Se elimino correctamente'
        })
    } catch (error) {
        console.log(error);
        next();
    };
};