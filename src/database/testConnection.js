const connection = require('./testConnection');

async function testConnection() {
    try {
        const conn = await connection.getConnection();
        console.log('✅ Conectado ao MySQL!');
        conn.release();
    } catch (error) {
        console.error('❌ Erro ao conectar ao MySQL:', error.message);
    }
}

testConnection();