<template>
  <div class="q-pa-md">
    <div style="max-width: 100%">
      <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
        <q-tab class="text-pink" name="energy" label="Energia" />
        <q-tab class="text-blue" name="water" label="Woda" />
        <q-tab class="text-yellow" name="gas" label="Gaz" />
        <q-tab class="text-orange" name="heat" label="Ciepło" />
      </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-grey text-white text-center"
        >
          <q-tab-panel name="energy" class="q-tab2">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Data ostatniego odczytu:</p>

                  <h4 style="margin-top: 2cqb">{{ energyReadDate }}</h4>
                </div>
                <div class="panel2">
                  <p>Wartość ostatniego odczytu</p>
                  <h4 style="margin-top: 20px">{{ energyState }} kWh</h4>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="water" class="q-tab1">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Data ostatniego odczytu:</p>
                  <h4 style="margin-top: 2cqb">{{ energyReadDate }}</h4>
                </div>
                <div class="panel2">
                  <p>Wartość ostatniego odczytu</p>
                  <h4 style="margin-top: 20px">{{ energyState }} m3</h4>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab1">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Data ostatniego odczytu:</p>
                  <h4 style="margin-top: 2cqb">{{ energyReadDate }}</h4>
                </div>
                <div class="panel2">
                  <p>Wartość ostatniego odczytu</p>
                  <h4 style="margin-top: 20px">{{ energyState }} m3</h4>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab1">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Data ostatniego odczytu:</p>
                  <h4 style="margin-top: 2cqb">{{ energyReadDate }}</h4>
                </div>
                <div class="panel2">
                  <p>Wartość ostatniego odczytu</p>
                  <h4 style="margin-top: 20px">{{ energyState }} GJ</h4>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-blue text-white text-center"
        >
          <q-tab-panel name="energy" class="q-tab2">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Podaj datę odczytu licznika</p>
                  <q-date
                    v-model="date"
                    color="grey"
                    text-color="black"
                    dark
                    landscape
                  />
                </div>
                <div class="panel2">
                  <p>Podaj stan licznika</p>
                  <div class="q-pa-md" style="color: white">
                    <input
                      type="number"
                      style="
                        background-color: rgba(0, 0, 0, 0);
                        text-decoration: none;
                        border: 0px;
                        color: white;
                        font-size: 40px;
                        border-radius: 15px;
                        text-align: center;
                        height: 250px;
                      "
                      value="200000"
                    />

                  </div>

                </div>
                <q-btn color="primary" label="Prześlij dane"
                  style="
                    border-radius: 0px 16px 16px 0px;
                    width: 150px;
                  "
                />
              </div>

            </div>

          </q-tab-panel>

          <q-tab-panel name="water" class="q-tab2">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Podaj datę odczytu</p>
                  <q-date
                    v-model="date"
                    color="grey"
                    text-color="black"
                    dark
                    landscape
                  />
                </div>
                <div class="panel2">
                  <p>Podaj stan licznika wody</p>
                  <div class="q-pa-md" style="color: white">
                    <input
                      type="number"
                      style="
                        background-color: rgba(0, 0, 0, 0);
                        text-decoration: none;
                        border: 0px;
                        color: white;
                        font-size: 40px;
                        border-radius: 15px;
                        text-align: center;
                        height: 250px;
                      "
                      value="200000"
                    />
                  </div>
                </div>
                <q-btn color="primary" label="Prześlij dane"
                  style="
                    border-radius: 0px 16px 16px 0px;
                    width: 150px;
                  "
                />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab2">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Podaj datę odczytu</p>
                  <q-date
                    v-model="date"
                    color="grey"
                    text-color="black"
                    dark
                    landscape
                  />
                </div>
                <div class="panel2">
                  <p>Podaj stan licznika gazu</p>
                  <div class="q-pa-md" style="color: white">
                    <input
                      type="number"
                      style="
                        background-color: rgba(0, 0, 0, 0);
                        text-decoration: none;
                        border: 0px;
                        color: white;
                        font-size: 40px;
                        border-radius: 15px;
                        text-align: center;
                        height: 250px;
                      "
                      value="200000"
                    />
                  </div>
                </div>
                <q-btn color="primary" label="Prześlij dane"
                  style="
                    border-radius: 0px 16px 16px 0px;
                    width: 150px;
                  "
                />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab2">
            <div class="center-wrapper">
              <div class="pole-panel">
                <div class="panel1">
                  <p>Podaj datę odczytu</p>
                  <q-date
                    v-model="date"
                    color="grey"
                    text-color="black"
                    dark
                    landscape
                  />
                </div>
                <div class="panel2">
                  <p>Podaj stan licznika ciepła</p>
                  <div class="q-pa-md" style="color: white">
                    <input
                      type="number"
                      style="
                        background-color: rgba(0, 0, 0, 0);
                        text-decoration: none;
                        border: 0px;
                        color: white;
                        font-size: 40px;
                        border-radius: 15px;
                        text-align: center;
                        height: 250px;
                      "
                      value="200000"
                    />
                  </div>
                </div>
                <q-btn color="primary" label="Prześlij dane"
                  style="
                    border-radius: 0px 16px 16px 0px;
                    width: 150px;
                  "
                />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-down"
          class="bg-green text-white text-center"
        >
          <q-tab-panel name="energy" class="q-tab3">
            <div class="container-fluid pt-4 px-4">
              <div class="row g-4">
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Średnie zużycie dobowe</p>
                      <h6>{{ energyAverageConsumption }} kWh</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Wzrost zużycia poprzedni okres</p>
                      <h6>{{ energyIncrease }} %</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-1">Średni koszt miesiąc</p>
                      <h6>{{ energyAverageCost }} zł</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="water" class="q-tab3">
            <div class="container-fluid pt-4 px-4">
              <div class="row g-4">
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Średnie zużycie dobowe</p>
                      <h6>{{ energyAverageConsumption }} m3</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Wzrost zużycia poprzedni okres</p>
                      <h6>{{ energyIncrease }} %</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-1">Średni koszt miesiąc</p>
                      <h6>{{ energyAverageCost }} zł</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="gas" class="q-tab3">
            <div class="container-fluid pt-4 px-4">
              <div class="row g-4">
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Średnie zużycie dobowe</p>
                      <h6>{{ energyAverageConsumption }} m3</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Wzrost zużycia poprzedni okres</p>
                      <h6>{{ energyIncrease }} %</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-1">Średni koszt miesiąc</p>
                      <h6>{{ energyAverageCost }} zł</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="heat" class="q-tab3">
            <div class="container-fluid pt-4 px-4">
              <div class="row g-4">
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Średnie zużycie dobowe</p>
                      <h6>{{ energyAverageConsumption }} GJ</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-2">Wzrost zużycia poprzedni okres</p>
                      <h6>{{ energyIncrease }} %</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-4">
                  <div
                    class="rounded d-flex align-items-center justify-content-between p-4"
                  >
                    <div class="ms-3">
                      <p class="mb-1">Średni koszt miesiąc</p>
                      <h6>{{ energyAverageCost }} zł</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { api } from 'src/boot/axios';
export default {
  setup() {
    //Trzeba pobrać id aktualnie obługiwanego mieszkania
    const place_id = ref(1);
    const tab = ref('energy');
    const model = ref(10);
    const energyReadDate = ref('21.11.2023');
    const energyState = ref(201023);
    const energyAverageConsumption = ref(245);
    const energyIncrease = ref(24);
    const energyAverageCost = ref(321);
    const date = ref('2024/01/01');

    //to powinno nam zwrócić idczyty wszystkich liczników, które musimy rozróżnić na podstawie typu E-energy, W-water, G-gas, H-heat i wpisać do odpowiednych kolumn
    const responseCounters = async () => {
      try {
        const response = await api.get(`/counters/get/counters/${place_id.value}`);
        if (response.data) {
          $q.notify({
            type: 'positive',
            message: i18n.t('success'),
          });
        } else {
          $q.notify({
            type: 'negative',
            message: i18n.t('failed'),
          });
        }
      } catch (error) {
        console.error('Save data error:', error);
        $q.notify({
          type: 'negative',
          message: i18n.t('error.server_error'),
        });
      }
    };

    const fetchData = () => {
      responseCounters();
    };

    // tutaj trzeba dodać funckję która po kliknięciu odpowiedniego przycisku załaduje dany odczyt licznika

    fetchData();

    return {
      tab,
      model,
      energyReadDate,
      energyState,
      energyAverageConsumption,
      energyIncrease,
      energyAverageCost,
      date,
    };
  },
};
</script>

<style scoped>
.q-tab2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.pole-panel {
  display: flex;
  justify-content: space-between;
  width: 80%; /* Adjust width as needed */
  height: auto; /* Allows flexibility */
  box-shadow: 0px 0px 9px -7px rgba(66, 68, 90, 1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 1px;
  margin-top: 10px;
}

.panel1,
.panel2 {
  width: 50%; /* Divides space equally */
  padding: 5px;
  text-align: center;
  vertical-align: middle;
}

.panel1 {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 16px 0px 0px 16px;
}

.panel2 {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 0px 0px;
}
</style>
