    const NoteRouter = require('../Router/NoteRouter');

    let noteService;
    let response;
    let noteRouter;

    describe("NoteRouter with a function noteService", ()=>{

        beforeEach(()=>{
            noteService= {
                list : jest.fn().mockResolvedValue(true),
                add : jest.fn().mockResolvedValue(true),
                remove : jest.fn().mockResolvedValue(true),
                update : jest.fn().mockResolvedValue(true),
            }
            noteRouter = new NoteRouter(noteService)
        })

        test("the note router should call list in response to a get request", ()=>{
         noteRouter.get({
                auth: {
                    user: 'sam'
                }
            }, response).then(()=>{
                expect(noteService.list).toHaveBeenCalledWith('sam');
                expect(response.status).not.toHaveBeenCalled();
            });
        });

        test("the note router should call add in response to a POST", ()=>{
            noteRouter.post({
                   auth: {
                       user: 'sam'
                   },
                   body:{
                       note: 'test'
                   }
               }, response).then(()=>{
                   expect(noteService.add).toHaveBeenCalledWith('test','sam');
                   expect(noteService.list).toHaveBeenCalledWith('sam');
                   expect(response.status).not.toHaveBeenCalled();
               });
           });

           test("the note router should call update in response to a PUT", ()=>{
            noteRouter.put({
                   auth: {
                       user: 'sam'
                   },
                   body:{
                       note: 'testing'
                   },
                   params:{
                       id: 0
                   }
               }, response).then(()=>{
                   expect(noteService.update).toHaveBeenCalledWith(0, 'testing','sam');
                   expect(noteService.list).toHaveBeenCalledWith('sam');
                   expect(response.status).not.toHaveBeenCalled();
               });
           });

           test("the note router should call remove in response to a DELETE", ()=>{
            noteRouter.delete({
                   auth: {
                       user: 'sam'
                   },
    
                   params:{
                       id: 0
                   }
               }, response).then(()=>{
                   expect(noteService.remove).toHaveBeenCalledWith(0, 'sam');
                   expect(noteService.list).toHaveBeenCalledWith('sam');
                   expect(response.status).not.toHaveBeenCalled();
               });
           });


    })

