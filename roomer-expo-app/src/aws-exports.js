/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-2",
    "aws_cognito_identity_pool_id": "us-east-2:ae4876a8-0715-4ae7-b725-7151b668d1cd",
    "aws_cognito_region": "us-east-2",
    "aws_user_pools_id": "us-east-2_dzmOKfFrI",
    "aws_user_pools_web_client_id": "69ki0ee5bkdaerd29ao2l4f4a4",
    "oauth": {
        "domain": "roomerwebc3a5033d-c3a5033d-staging.auth.us-east-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:19006/,https://roomerhasit.net",
        "redirectSignOut": "http://localhost:19006/,https://roomerhasit.net",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL",
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_cognito_login_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
