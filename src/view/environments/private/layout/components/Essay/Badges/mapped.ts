export interface Badges {
  color: string;
  text: string;
}

export const BadgesList: { [key: string]: Badges } = {
  PENDING: {
    color: 'yellow',
    text: 'Revisão pendente'
  },
  IN_REVIEW: {
    color: 'orange',
    text: 'Em revisão'
  },
  NEEDS_REVISION: {
    color: 'purple',
    text: 'Correção necessária'
  },
  REVISION_SUBMITTED: {
    color: 'lime',
    text: 'Revisão enviada'
  },
  APPROVED: {
    color: 'green',
    text: 'Aprovada'
  },
  REJECTED: {
    color: 'red',
    text: 'Rejeitada'
  },
  COMPLETED: {
    color: 'blue',
    text: 'Revisão completa'
  }
};
