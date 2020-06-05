package controller;
import model.contactbook;
import org.springframework.web.bind.annotation.*;
import service.contactbookService;

import java.util.List;


@RestController
@RequestMapping("/api")
public class contactbookController {

    private contactbookService conbookService;

    @GetMapping("/contact")
    public List<contactbook> get(){
         return conbookService.get();
    }

    @PostMapping("/contact")
    public contactbook save(@RequestBody contactbook conObj)
    {
         conbookService.save(conObj);
         return conObj;
    }

    @GetMapping("/contact/{id}")
    public contactbook get(@PathVariable int id)
    {
        contactbook conObj= conbookService.get(id);
        if(conObj==null){
            throw new RuntimeException("Contact with id "+id+"not found");
        }
        return conObj;
    }

    @DeleteMapping("/contact/{id}")
    public String delete(@PathVariable int id)
    {
        conbookService.delete(id);
        return "contact has been deleted with id" + id;
    }

    @PutMapping("/contact")
    public contactbook update(@RequestBody contactbook conObj){
        conbookService.save(conObj);
        return conObj;
    }
}

