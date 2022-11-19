import {GIT_TOKEN_DEV, GIT_TOKEN_PROD} from '@env';

export default __DEV__ ? GIT_TOKEN_DEV : GIT_TOKEN_PROD;
