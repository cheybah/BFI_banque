
export  const sidebar =  [
    {
        title: 'Tableau de board',
        icon: 'bi bi-shop', // Bootstrap icon
        link: '/transactions-dashboard', // Optional link
        isActive: false, // Indicate active item
    
      },
      {
        title: 'Comptes',
        icon: 'bi bi-person-vcard',
        link: '/accounts-create',
        isActive: false, // Set all other items as inactive by default
      },
      {
        title: 'Transactions',
        icon: 'bi bi-credit-card',
        link: '/',
        isActive: false,
      },
      {
        title: 'Transfert Rapide',
        icon: 'bi bi-arrow-left-right',
        link: ' /transfert-rapide',
        isActive: false,
      },
      {
        title: 'Historique',
        icon: 'bi bi-clock-history',
        link: '/',
        isActive: false,
      },
      {
        title: 'Validations',
        icon: 'bi bi-check-all',
        link: '/',
        isActive: false,
      },
      {
        title: 'Administration',
        icon: 'bi bi-building',
        link: '/administration/gestion-profil-utilisateurs',
        isActive: false,
      },
      {
        title: 'Service Client',
        icon: 'bi bi-headset',
        link: '/administration/gestion-utilisateurs',
        isActive: false,
      },
      {
        title: 'Service Client',
        icon: 'bi bi-headset',
        link: '/service-client/rendez-vous',
        isActive: false,
      },
      {
        title: 'Service Client',
        icon: 'bi bi-headset',
        link: '/service-client/reclamation',
        isActive: false,
      },
      {
        title: 'Configurations',
        icon: 'bi bi-gear',
        link: '',
        isActive: false,
      },
   
]