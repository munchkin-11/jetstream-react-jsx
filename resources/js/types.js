export const Team = {
  id: Number,
  name: String,
  personal_team: Boolean,
  created_at: String,
  updated_at: String,
};

export const User = {
  id: Number,
  name: String,
  email: String,
  current_team_id: String ?? null,
  profile_photo_path: String ?? null,
  profile_photo_url: String,
  two_factor_enabled: Boolean,
  email_verified_at: String ?? null,
  created_at: String,
  updated_at: String,
};

export const InertiaSharedProps = {
  jetstream: {
    canCreateTeams: Boolean,
    canManageTwoFactorAuthentication: Boolean,
    canUpdatePassword: Boolean,
    canUpdateProfileInformation: Boolean,
    flash: typeof any,
    hasAccountDeletionFeatures: Boolean,
    hasApiFeatures: Boolean,
    hasTeamFeatures: Boolean,
    hasTermsAndPrivacyPolicyFeature: Boolean,
    managesProfilePhotos: Boolean,
  },
  user:
    User &
    {
      all_teams: Team,
      current_team: Team,
    },
  errorBags: typeof any,
  errors: typeof any,
};

export const Session = {
  id: Number,
  ip_address: String,
  is_current_device: Boolean,
  agent: {
    is_desktop: Boolean,
    platform: String,
    browser: String,
  },
  last_active: String,
};

export const ApiToken = {
  id: Number,
  name: String,
  abilities: String,
  last_used_ago: String ?? null,
  created_at: String,
  updated_at: String,
};

export const JetstreamTeamPermissions = {
  canAddTeamMembers: Boolean,
  canDeleteTeam: Boolean,
  canRemoveTeamMembers: Boolean,
  canUpdateTeam: Boolean,
};

export const Role = {
  key: String,
  name: String,
  permissions: String,
  description: String,
};

export const TeamInvitation = {
  id: Number,
  team_id: Number,
  email: String,
  role: String ?? null,
  created_at: String,
  updated_at: String,
};
