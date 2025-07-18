import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabaseUrl = 'your_supabase_url'; // Substitua pelo seu URL

const supabaseAnonKey = 'your_supabase_anon_key'; // Substitua pela sua chave

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: users, error } = await supabase.from('users').select('*');
      if (error) console.error(error);
      else setData(users);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Chame o Cézar - Usuário App</Text>
      {data.map((user, index) => (
        <Text key={index}>{user.name || 'Usuário'}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
