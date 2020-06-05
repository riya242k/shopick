package service;

import dao.contactbookDAO;
import model.contactbook;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class contactbookServiceImp implements contactbookService {

 private contactbookDAO conbookDAO;

   @Transactional
    @Override
    public List<contactbook> get() {
        return conbookDAO.get();
    }

    @Transactional
    @Override
    public contactbook get(int id) {
        return conbookDAO.get(id);
    }

    @Transactional
    @Override
    public void save(contactbook connook) {
       conbookDAO.save(connook);
    }

    @Transactional
    @Override
    public void delete(int id) {
       conbookDAO.delete(id);
    }
}
