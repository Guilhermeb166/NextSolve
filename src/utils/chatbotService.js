
export async function getOpenRouterResponse(prompt = '') {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      console.error('Erro na API interna:', response.status, response.statusText);
      return 'Desculpe, não consegui me conectar ao serviço. Tente novamente.';
    }

    const data = await response.json();

    if (data?.choices?.length > 0) {
      return data.choices[0].message.content.trim();
    } else if (data.error) {
      return 'Erro: ' + data.error;
    } else {
      return 'Desculpe, tive um problema para processar sua resposta. Tente novamente.';
    }
  } catch (error) {
    console.error('Erro de rede:', error);
    return 'Ocorreu um erro de rede. Por favor, verifique sua conexão.';
  }
}