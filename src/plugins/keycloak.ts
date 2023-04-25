import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: 'https://auth.homolog.ccarj.intraer/auth',
    realm: 'FAB',
    clientId: 'manutencao-client',
    // onLoad: 'login-required',
})

export default keycloak;