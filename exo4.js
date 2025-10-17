function calculerTotalAuSeuil(scores, seuil){
    return scores
    .filter(score => score >= seuil)
        .reduce((total, score) => total + score, 0);
  }
  
  // Trie la liste
  function trierParTotal(utilisateurs) {
    return utilisateurs((a, b) => b.total - a.total);
  }
  
  // pour voir meilleur score

  //pas eu le temps de finir
