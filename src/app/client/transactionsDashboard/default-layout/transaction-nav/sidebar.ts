import {SideBarData} from './SideBarData'


export const sidebarPP: SideBarData[] = [
  {
    title: 'Tableau de board',
    icon: 'bi bi-shop', // Bootstrap icon
    link: '/transactions-dashboard', // Optional link
    isActive: false, // Indicate active item

  },
  {
    title: 'Comptes',
    icon: 'bi bi-person-vcard',
    link: 'javascript:void(0)', // Parent item
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed
    subitems: [
      {
        title: 'Comptes',
        link: '/accounts/create', 
        icon: 'bi bi-person-vcard',
      },
      {
        title: 'E-Documents',
        link: '/accounts/e-docs',
        icon: 'bi bi-person-vcard',
      },
      {
        title: 'Mes contacts',
        link: 'accounts/my-contacts', 
        icon: 'bi bi-person-vcard',
      },
    ],
  },
  {
    title: 'Transactions',
    icon: 'bi bi-credit-card',
    link: 'javascript:void(0)',
    isActive: false,
    subitems: [
      {
        title: 'Virements',
        link: 'transactions/virement',
        icon: 'bi bi-person-vcard',
 
      },
      {
        title: 'MassPay',
        link: '/accounts/manage', 
        icon: 'bi bi-person-vcard',

      },
      {
        title: 'Dépôt/Retraits',
        link: '/accounts/manage',
      },
      {
        title: 'Carte Prepayée',
        link: '/carteprepayee',
      },
      {
        title: 'Placements',
        link: '/accounts/manage',
      },
      {
        title: 'Moyen de paiement',
        link: '/accounts/manage',
      },
    ],
  },
  {
    title: 'Transfert Rapide',
    icon: 'bi bi-arrow-left-right',
    link: '/transfert-rapide',
    isActive: false,
  },
  {
    title: 'Historique',
    icon: 'bi bi-clock-history',
    link: 'javascript:void(0)',
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed
    subitems: [
      {
        title: 'Comptes',
        link: '/accounts/create', // Subitem link
      },
      {
        title: 'E-Documents',
        link: '/accounts/manage', // Subitem link
      },
      {
        title: 'Mes contacts',
        link: '/accounts/manage', // Subitem link
      },
    ]
  },
  {
    title: 'Service Client',
    icon: 'bi bi-headset',
    link: '/administration/gestion-utilisateurs',
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed

    subitems: [
      {
        title: 'Rendez-vous',
        link: '/service-client/rendez-vous', // Subitem link
      },
      {
        title: 'Réclamation',
        link: '/service-client/reclamation', // Subitem link
      },
      {
        title: 'Messageries',
        link: '/accounts/manage', // Subitem link
      },
    ],
  },

  {
    title: 'Configurations',
    icon: 'bi bi-gear',
    link: '/settings',
    isActive: false,
  },

];

export const sidebarPM: SideBarData[] = [
  {
    title: 'Tableau de board',
    icon: 'bi bi-shop', // Bootstrap icon
    link: '/transactions-dashboard', // Optional link
    isActive: false, // Indicate active item

  },
  {
    title: 'Comptes',
    icon: 'bi bi-person-vcard',
    link: 'javascript:void(0)', // Parent item
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed
    subitems: [
      {
        title: 'Comptes',
        link: '/accounts/create', 
        icon: 'bi bi-person-vcard',
      },
      {
        title: 'E-Documents',
        link: '/accounts/e-docs',
        icon: 'bi bi-person-vcard',
      },
      {
        title: 'Mes contacts',
        link: 'accounts/my-contacts', 
        icon: 'bi bi-person-vcard',
      },
    ],
  },
  {
    title: 'Transactions',
    icon: 'bi bi-credit-card',
    link: 'javascript:void(0)',
    isActive: false,
    subitems: [
      {
        title: 'Virements',
        link: 'transactions/virement',
        icon: 'bi bi-person-vcard',
 
      },
      {
        title: 'MassPay',
        link: '/accounts/manage', 
        icon: 'bi bi-person-vcard',

      },
      {
        title: 'Dépôt/Retraits',
        link: '/accounts/manage',
      },
      {
        title: 'Carte Prepayée',
        link: '/carteprepayee',
      },
      {
        title: 'Placements',
        link: '/accounts/manage',
      },
      {
        title: 'Moyen de paiement',
        link: '/accounts/manage',
      },
    ],
  },
  {
    title: 'Transfert Rapide',
    icon: 'bi bi-arrow-left-right',
    link: '/transfert-rapide',
    isActive: false,
  },
  {
    title: 'Historique',
    icon: 'bi bi-clock-history',
    link: 'javascript:void(0)',
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed
    subitems: [
      {
        title: 'Comptes',
        link: '/accounts/create', // Subitem link
      },
      {
        title: 'E-Documents',
        link: '/accounts/manage', // Subitem link
      },
      {
        title: 'Mes contacts',
        link: '/accounts/manage', // Subitem link
      },
    ]
  },
  {
    title: 'Validations',
    icon: 'bi bi-check-all',
    link: 'javascript:void(0)',
    isActive: false,
  },
  {
    title: 'Administration',
    icon: 'bi bi-building',
    link: 'javascript:void(0)',
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed
    subitems: [
      {
        title: 'gestion utilisateurs',
        link: '/gestion-utilisateurs', 
      },
      {
        title: 'gestion profils utilisateurs',
        link: '//administration/gestion-profil-utilisateurs', 
      }
    ],
  },
  {
    title: 'Service Client',
    icon: 'bi bi-headset',
    link: '/administration/gestion-utilisateurs',
    isActive: false,
    expanded: false, // Parent item to be expanded/collapsed

    subitems: [
      {
        title: 'Rendez-vous',
        link: '/service-client/rendez-vous', // Subitem link
      },
      {
        title: 'Réclamation',
        link: '/service-client/reclamation', // Subitem link
      },
      {
        title: 'Messageries',
        link: '/accounts/manage', // Subitem link
      },
    ],
  },

  {
    title: 'Configurations',
    icon: 'bi bi-gear',
    link: '/settings',
    isActive: false,
  },

]