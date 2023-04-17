import axios from 'axios'

const url = "https://api-football-beta.p.rapidapi.com/";

const headers = {
    "X-RapidAPI-Key": "353bc911a2mshd728a2db2466f0bp1f6450jsn205269405a13",
    "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST
}

export const getCountries = async (name) => {
    let options = {
        headers,
    }

    if (name) {
        options = {
            ...options,
            params: { name }
        }
    }

    const data = await axios.get(`${url}countries`, options);

    console.log(data.data.response);

    return data.data.response;
}

export const getLeague = async (country, team) => {
    if (!team) {
        const options = {
            headers,
            params: { country }
        }

        const league = await axios.get(`${url}leagues`, options);

        return league.data;
    } else {
        const options = {
            headers,
            params: { team }
        }

        const league = await axios.get(`${url}leagues`, options);

        // console.log(league.data.reponse[0].league.id);

        return league.data.response[0].league.id;
    }

}

export const getStanding = async (id, season) => {
    const options = {
        headers,
        params: { league: id, season }
    }

    const standing = await axios.get(`${url}standings`, options);

    return standing.data.response;
}

export const getPlayers = async (team, season, page = 1, playerId = null) => {
    let params;

    playerId ? params = { id: playerId, season } : params = { team, page, season }

    const options = {
        headers,
        params
    }

    const players = await axios.get(`${url}players`, options);

    return players.data;
}

export const getTransfer = async (player = null, team = null) => {
    let params;

    player ? params = { player } : params = { team }

    const options = {
        headers,
        params
    }

    const transfer = await axios.get(`${url}transfers`, options);

    return transfer.data.response[0];
}

export const getTeamInfo = async (id, season, league) => {

    const options = {
        headers,
        params: {
            id,
            season,
            league
        }
    }

    const teamInfo = await axios.get(`${url}teams`, options);

    return teamInfo.data.response[0];
}

export const getCoach = async (team, id = undefined) => {
    const options = {
        headers,
        params: {
            team,
            id
        }
    }

    const teamInfo = await axios.get(`${url}coachs`, options);

    return teamInfo.data.response[0];
}

export const getFixtures = async (date, league, season, id, team) => {

    let options = { headers }

    if (id) {
        options = {
            ...options,
            params: { id }
        }
    } else if (team) {
        const trueDate = date.split("-");
        options = {
            ...options,
            params: { season, team, date: `${trueDate[0]}-${trueDate[2]}-${trueDate[1]}` }
        }
    }
    else {
        const trueDate = date.split("-");
        options = {
            ...options,
            params: { season, league, date: `${trueDate[0]}-${trueDate[2]}-${trueDate[1]}` }
        }
    }

    const fixtures = await axios.get(`${url}fixtures`, options);

    return fixtures.data.response;
}

export const getFixturesStatistics = async (fixture) => {

    const options = {
        headers,
        params: { fixture }
    }

    const fixtures = await axios.get(`${url}fixtures/statistics`, options);

    return fixtures.data.response;
}