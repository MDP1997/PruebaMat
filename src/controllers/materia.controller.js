const materiaCtrl = {};

const Materia = require('../models/materia');

materiaCtrl.getMaterias = async (req, res) => {
    
    //const materias = await Materia.find();
    //res.sendStatus(200).json(materias);

    Materia.find({}, (err, materias) => {
        if(err){
            console.log(Date() + "-" + err);
            res.sendStatus(500);
        }else{
            res.send(materias.map((materia) => {
                return materia;
            }))
        }
    })
    
};

materiaCtrl.createMateria = async (req, res) => {

     /*try{
        const { nombre, descripcion, area } = req.body;
        const newMateria = new Materia({
            nombre,
            descripcion,
            area
        });
        await newMateria.save();
        res.status(201).json(newMateria);
    }catch(err){
        console.log(Date() + " - " + err);

        if(err.errors){
            res.status(400).send({error:err.message})

        }else{
            res.sendStatus(500);
        }
      }*/
        
        
        
    

//const materia = req.body;

const { nombre, descripcion, area } = req.body;
        const materia = new Materia({
            nombre,
            descripcion,
            area
        });
        Materia.create(materia, (err) => {
            if (err) {
              console.log(Date() + " - " + err);
        
              if (err.errors) {
                res.status(400).send({ error: err.message })
              } else {
                res.sendStatus(500);
              }
            } else {
              res.status(201).json(materia);
            // res.sendStatus(201).send(materia);
             //res.status(201).json(materia);
              /*res.send(materia);
              res.sendStatus(201);
              return materia;*/
            }
          });


/*

    const { nombre, descripcion, area } = req.body;
        const newMateria = new Materia({
            nombre,
            descripcion,
            area
        });
        newMateria.post({}, (err, materias) => {
            if(err){
                console.log(Date() + "-" + err);
                res.sendStatus(500);
            }else{
                res.send(newMateria.map((materia) => {
                    return materia;
                }))
            }
        });
*/
};

materiaCtrl.getMateria = async (req, res) => {
    
    /*const materia = await Materia.findById(req.params.id);
    res.json(materia);*/

    Materia.findById({_id:req.params.id}, (err, materia) => {
        if (err) {
          console.log(Date() + " - " + err);
          res.sendStatus(500);
        } else {
          res.send(materia);
        }
      });
}

materiaCtrl.deleteMateria = async (req, res) => {
    /*await Materia.findByIdAndDelete(req.params.id)
    res.sendStatus().json('Materia eliminada');*/

    Materia.findByIdAndDelete({ _id: req.params.id }, (err, materia) => {
      if (err) {
        console.log(Date() + " - " + err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
        return materia;
      }
    });

}

materiaCtrl.updateMateria = async (req, res) => {
   
   /* const { nombre, descripcion, area } = req.body;
    await Materia.findByIdAndUpdate(req.params.id, {
        nombre,
        descripcion,
        area
    });
    res.json('Materia modificada');*/

    
    
    /*Materia.findByIdAndUpdate(req.params.id, name,  (err, materia) => {
        
        if (err) {
          console.log(Date() + " - " + err);
    
          if (err.errors) {
            res.status(400).send({ error: err.message })
          } else {
            res.sendStatus(500);
          }
        } else {
          materia.value = value;
          res.send(materia);
        }
      });*/
      let id = req.params.id;
      var data = req.body;
      const filter = { _id: id };
      Materia.findOneAndUpdate(filter, data, (err, materia) => {
        if (err) {
          console.log(Date() + " - " + err);
    
          if (err.errors) {
            res.status(400).send({ error: err.message })
          } else {
            res.sendStatus(500);
          }
        } else {
          materia.data = data;
          res.send(materia);
        }
      });


      
}

module.exports = materiaCtrl;