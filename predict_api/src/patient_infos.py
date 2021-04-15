import datetime
import pandas as pd

arq = open('./src/files/blood_donation_hist.csv')
df_donation = pd.read_csv(arq, sep = ',')


def create_dict(patientID):

    filter_id = df_donation.loc[df_donation.patient_id == patientID]

    if filter_id.count().patient_id == 0:
        return {"error":'PatientId not found'}
    
    else:
        qte_donate = filter_id.count().patient_id
        months = list(filter_id.donation_date)[-1].split('-')[1]
        total_donated = sum(filter_id.volume_donated_cc)

        date_compare = '2021-04-01'

        first_donate_date = list(filter_id.donation_date)[0]

        d1 = datetime.datetime.strptime(date_compare,'%Y-%m-%d')
        d2 = datetime.datetime.strptime(first_donate_date,'%Y-%m-%d')

        since_months = (d1.year - d2.year) * 12 + d1.month - d2.month


        return {
            "months_since_last_donation": int(months), 
            "number_of_donations": int(qte_donate), 
            "total_volume_donated_cc": int(total_donated), 
            "months_since_first_donation": int(since_months)
        }
