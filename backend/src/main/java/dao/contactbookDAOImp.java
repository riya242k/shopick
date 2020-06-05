package dao;

import model.contactbook;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class contactbookDAOImp implements contactbookDAO {
   @Autowired
    private EntityManager entityManager;
    @Override
    public List<contactbook> get() {
        Session currentSession =entityManager.unwrap(Session.class);
        Query<contactbook> query= currentSession.createQuery("from contactbook",contactbook.class);
        List<contactbook> list =query.getResultList();
        return list;
    }

    @Override
    public contactbook get(int id) {
        Session currentSession =entityManager.unwrap(Session.class);
        contactbook conObj = currentSession.get(contactbook.class,id);
        return conObj;
    }

    @Override
    public void save(contactbook conbook) {
        Session currentSession =entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(conbook);
    }

    @Override
    public void delete(int id) {
        Session currentSession =entityManager.unwrap(Session.class);
        contactbook conObj = currentSession.get(contactbook.class,id);
        currentSession.delete(conObj);

    }
}
