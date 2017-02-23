module.exports = function (app) {
    var valida = require('./../middlewares/valida'); 
    var cursos = app.controllers.cursos;
    
    var apiCursos = app.minhaapi.cursos;
    console.log('app');
    console.log(app);
    console.log('');
    console.log('app.controllers');
    console.log(app.controllers);
    console.log('');
    
    
    app.get('/menu', cursos.menu);
    app.get('/cadCurso', cursos.cadastroCursos);
    app.get('/listaCursos', cursos.listaCursos);

    app.post('/novoCurso', cursos.novoCurso); 
    app.post('/api/novoCurso', apiCursos.novoCurso); 

}; 