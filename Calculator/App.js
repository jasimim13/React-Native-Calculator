import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [val, setval] = useState("");
  const [operator, setOperator] = useState("");
  const [prevVal, setPrevVal] = useState("");

  const onClick = (number) => {
    setval(val + number);
  };

  const onOpClick = (op) => {
    if (op == "+") {
      setOperator(op);
      if (prevVal != "" && val != "") {
        setPrevVal(parseInt(val) + parseInt(prevVal));
      } else {
        setPrevVal(val);
      }
      setval("");
    }

    if (op == "-") {
      setOperator(op);
      if (prevVal != "") {
        setPrevVal(parseInt(val) - parseInt(prevVal));
      } else {
        setPrevVal(val);
      }
      setval("");
    }
  };

  const calculate = (prevVal, val, operator) => {
    if (operator == "+") {
      setval(parseInt(prevVal) + parseInt(val));
      setPrevVal("");
    }
    if (operator == "-") {
      setval(parseInt(prevVal) - parseInt(val));
      setPrevVal("");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#36454F",
        margin: "auto",
        borderRadius: 20,
        borderColor: "#f6cd61",
        borderWidth: 5,
      }}
    >
      <View style={styles.viewBox}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", justifyContent: "center" }}
        >
          {val}
        </Text>
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("1");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            onClick("2");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("3");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("4");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("5");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("6");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("7");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("8");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("9");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onOpClick("+");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onClick("0");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            onOpClick("-");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", margin: "auto" }}>
        <TouchableOpacity
          style={styles.container}
          value={val}
          onPress={() => {
            calculate(prevVal, val, operator);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6cd61",
    borderRadius: 50,
    width: 55,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: "center",
    flex: 2,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "center",
  },
  viewBox: {
    padding: 10,
    backgroundColor: "#F5F5DC",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: "#f6cd61",
    width: 200,
    flexDirection: "row",
    margin: "auto",
    marginTop: 15,
    marginBottom: 15,
    height: 40,
  }
});
