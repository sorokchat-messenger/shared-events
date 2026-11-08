type Base64String = string & { readonly __brand: unique symbol };

export interface TreeCommitPayload {
    readonly proposalOrCommit: Base64String;
    readonly signature: Base64String;
    readonly ratchetTree?: Base64String;
}

export interface GroupMemberAddedPayload {
    readonly userId: string;
    readonly welcome: {
        readonly cipherSuite: number;
        readonly secrets: Base64String;
        readonly encryptedGroupInfo: Base64String;
        readonly ratchetTree: Base64String;
    };
}

export interface GroupMemberRemovedPayload {
    readonly userId: string;
    readonly leafIndex: number;
}

export interface KeyPackagePublishedPayload {
    readonly keyPackageId: Base64String;
    readonly rawData: Base64String;
    readonly validUntil: number;
}