export interface Theme {
  label: string;
}

export const SpecificationList: { [key: string]: Theme } = {
  ENEM: {
    label: 'ENEM'
  },
  VESTIBULAR: {
    label: 'Vestibular'
  },
  CONCURSO: {
    label: 'Concurso'
  },
  ANPAD: {
    label: 'ANPAD'
  },
  ANPEC: {
    label: 'ANPEC'
  },
  OAB: {
    label: 'OAB'
  },
  RESIDENCIA_MEDICA: {
    label: 'Residência Médica'
  },
  IELTS: {
    label: 'IELTS'
  },
  SAT: {
    label: 'SAT'
  },
  GMAT: {
    label: 'GMAT'
  },
  GRE: {
    label: 'GRE'
  },
  ESPECIFICO: {
    label: 'Específico'
  },
  OTHER: {
    label: 'Outros'
  }
};
