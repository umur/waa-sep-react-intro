package edu.miu.lab7service.service;

import edu.miu.lab7service.entity.OffensiveWordsAudit;

import java.util.Set;

public interface OffensiveWordsAuditService {

    void save(OffensiveWordsAudit offensiveWordsAudit);

    Set<OffensiveWordsAudit> findByLast30Mins(int userId);
}
