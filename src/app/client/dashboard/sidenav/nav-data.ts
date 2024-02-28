
export  const navbarData =  [
    {
        routeLink : 'informations-personelles',
        icon : 'fal fa-user-circle',
        label: 'Informations Personnelles',
        visited: false,
        nextComponent: 'adresse'
        // Ajoutez la propriété visited

    },
    {
        routeLink : 'adresse',
        icon : 'fal fa-map-marker-alt',
        label: 'Adresse',
        visited: false,
        nextComponent: 'autres-informations'

    },
    {
        routeLink : 'autres-informations',
        icon : 'fal fa-info-circle',
        label: 'Autres informations',
        visited: false,
        nextComponent: 'offres-et-domicialisation'

    },
    {
        routeLink : 'offres-et-domicialisation',
        icon : 'fal fa-building',
        label: 'Offres et domicialisation',
        visited: false,
        nextComponent: 'conditions-generales'

    },
    {
        routeLink : 'conditions-generales',
        icon : 'fal fa-file-alt',
        label: 'Conditions Génèrales',
        visited: false,
        nextComponent: 'mot-de-passe'

    },
    {
        routeLink : 'mot-de-passe',
        icon : 'fa fa-lock',
        label: 'Mot de passe',
        visited: false,
        nextComponent: 'validation'

    },
    {
        routeLink : 'validation',
        icon : 'fa fa-check-circle',
        label: 'Validation',
        visited: false,

    },
   
]