import api, { HttpMethods } from '../http';

const controllerUrl = '/eventlog';

interface GenerateLogProps {
	url: string;
	minCommits: number;
	logName: string;
}

interface DownloadLogProps {
	logName: string;
}

export async function generateLog(payload: GenerateLogProps) {
	return await api({
		method: HttpMethods.POST,
		url: `${controllerUrl}/generate_log`,
		data: payload
	});
}

export async function downloadLog(payload: DownloadLogProps) {
	return await api({ method: HttpMethods.POST, url: `${controllerUrl}/download`, data: payload });
}
