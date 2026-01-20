export interface player {
    firstName: string,
    lastName: string,
    playerId: number,
    teamId: number
}

export interface team {
    abbreviation: string,
    teamName: string,
    simpleName: string,
    teamId: number,
    location: string
}

export interface player_detail {
    id: number,
    player_name: string,
    team_abbreviation: string,
    age: number,
    player_height: number,
    player_weight: number,
    college: string,
    country: string,
    draft_year: string,
    draft_round: string,
    draft_number: string,
    gp: number,
    pts: number,
    reb: number,
    ast: number,
    net_rating: number,
    oreb_pct: number,
    dreb_pct: number,
    usg_pct: number,
    ts_pct: number,
    ast_pct: number,
    season: string
}

export interface AuthResponse {
    access_token: string,
    refresh_token: string,
    email: string
}

export interface errorInterface {
    error: string,
    message: string
}

export interface NbaSummary {
    day: {},
    events: events[],
    leagues: [],
    provider: {},
    season: {}
}

export interface events {
    competitions: competitions[],
    date: string,
    links: [],
    name: string,
    season: {},
    shortName: string,
    status: {},
    uid: string
}

export interface competitions {
    attendance: number,
    broadcast: string,
    broadcasts: [],
    competitors: competitors[],
    conferenceCompetition: boolean,
    date: string,
    format: {}
    geoBroadcasts: [],
    headlines: [],
    highlights: [],
    id: string,
    neutralSite: boolean,
    notes: [],
    playByPlayAvailable: boolean
    recent: boolean,
    startDate: string,
    status: {},
    timeValid: boolean,
    type: {},
    uid: string,
    venue: {}
}

export interface competitors {
    homeAway: string,
    id: string,
    leaders: [],
    linescores: [],
    order: number,
    records: record[],
    score: string,
    statistics: [],
    team: teams,
    type: string,
    uid: string,
    winner: boolean
}

export interface record {
    name: string,
    summary: string,
    type: string
}

export interface teams {
    abbreviation: string,
    alternateColor: string,
    color: string,
    displayName: string,
    id: string,
    isActive: boolean
    links: []
    location: string,
    logo: string,
    name: string,
    shortDisplayName: string,
    uid: string,
    venue: {}
    type: string,
    winner: boolean
}

