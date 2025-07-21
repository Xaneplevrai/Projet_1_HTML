phrase = input("Ecrivez votre phrase dans la champ ci-après : ")
def longueur_chaine(chaine):
  compteur = 0
  for _ in chaine:
    compteur += 1
  return compteur
longueur_phrase = longueur_chaine(phrase)

def compter_mots(chaine):
  mots = chaine.split()

  def longueur_chaine(chaine):
    compteur = 0
    for _ in chaine:
      compteur += 1
    return compteur
  return longueur_chaine(mots)

nombre_de_mots = compter_mots(phrase)

def compter_voyelles(chaine):
  voyelles = "aeiouAEIOU"
  nombre_voyelles = 0
  for lettre in chaine:
    if lettre in voyelles:
      nombre_voyelles += 1
  return nombre_voyelles
nombre_voyelles = compter_voyelles(phrase)

print(f"La phrase-ci a {longueur_phrase} caractères, {nombre_de_mots} mots, et {nombre_voyelles} voyelles")