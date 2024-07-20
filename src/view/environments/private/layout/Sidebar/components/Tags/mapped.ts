export interface Tags {
  color: string;
  label: string;
}

export const TagsList: { [key: string]: Tags } = {
  EDUCATION: {
    color: 'lime',
    label: 'Educação'
  },
  TECHNOLOGY: {
    color: 'gold',
    label: 'Tecnologia'
  },
  SCIENCE: {
    color: 'volcano',
    label: 'Ciência'
  },
  HEALTH: {
    color: 'geekblue',
    label: 'Saúde'
  },
  ART: {
    color: 'purple',
    label: 'Arte'
  },
  HISTORY: {
    color: '',
    label: 'História'
  },
  LITERATURE: {
    color: 'blue',
    label: 'Literatura'
  },
  BUSINESS: {
    color: 'green',
    label: 'Negócios'
  },
  SPORTS: {
    color: 'cyan',
    label: 'Esportes'
  },
  ENVIRONMENT: {
    color: 'orange',
    label: 'Meio ambiente'
  },
  POLITICS: {
    color: 'yellow',
    label: 'Política'
  },
  CULTURE: {
    color: 'red',
    label: 'Cultura'
  },
  SOCIETY: {
    color: 'pink',
    label: 'Sociedade'
  },
  ECONOMICS: {
    color: 'magenta',
    label: 'Economia'
  },
  PHILOSOPHY: {
    color: 'brown',
    label: 'Filosofia'
  }
};
